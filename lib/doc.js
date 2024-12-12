import fs from "fs"
import path from "path"
import matter from "gray-matter";

import { remark } from "remark";
import remarkHtml from "remark-html";

const postDirectory = path.join(process.cwd(), "docs");

export function getDocument() {
    const fileNames = fs.readdirSync(postDirectory)
    const allDocuments = fileNames.map(filename => {
        const id = filename.replace('.md', '')
        const fullPath = path.join(postDirectory, filename)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const matterResult = matter(fileContents);
        return {
            id,
            ...matterResult.data
        }
    })
    return allDocuments.sort((a, b) => a.order - b.order)
}

export async function getDocContent(id) {
    const fullPath = path.join(postDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const processedContent = await remark().use(remarkHtml).process(matterResult.content)

    const contentHtml = processedContent.toString()
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}
