import matter from "gray-matter";
import path, { join } from "path"

export default function getAllDocs() {
    var fs = require('fs');
    const docsDirectory = path.join(process.cwd(), 'articles')
    const filenames: string[] = fs.readdirSync(docsDirectory)

    var docsData: any[] = []

    for (var i = 0; i < filenames.length; i++) {
        let split = filenames[i].split("/")
        let filename = split[split.length - 1]
        let slug = filename.replace(/\.md$/, '');
        const fullPath = join(docsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        docsData.push({ "slug": slug, "data": data })
    }
    return docsData
}