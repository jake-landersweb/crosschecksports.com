import matter from "gray-matter";
import { join } from "path";

export default function getDocBySlug(slug) {
    const docsDirectory = join(process.cwd(), 'articles');

    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(docsDirectory, `${realSlug}.md`);
    var fs = require('fs');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return { data, content }
}