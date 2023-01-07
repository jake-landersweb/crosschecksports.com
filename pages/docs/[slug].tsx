import { GetStaticProps, InferGetStaticPropsType } from "next";
import BoundsWrapper from "../../components/boundsWrapper";
import DocCell from "../../components/docCell";
import MarkdownRenderer from "../../components/markdownRenderer/markdownRenderer";
import getAllDocs from "../../lib/getAllDocs";
import getDocBySlug from "../../lib/getDocBySlug";

export const getStaticProps: GetStaticProps = async (context) => {
    console.log(context)
    const doc = getDocBySlug(context.params!.slug);

    const nextSlugs = doc.data.next.split(",")

    const nextCellData: any[] = []

    for (var i = 0; i < nextSlugs.length; i++) {
        const d = getDocBySlug(nextSlugs[i])
        d.data['slug'] = nextSlugs[i]
        nextCellData.push(d.data)
    }

    return {
        props: {
            doc,
            nextCellData,
        },
    };
}

const Doc = ({ doc, nextCellData }: InferGetStaticPropsType<typeof getStaticProps>) => {

    console.log(nextCellData)

    const getNext = () => {
        const items: any[] = []


        for (var i = 0; i < nextCellData.length; i++) {
            items.push(<DocCell docData={{
                slug: nextCellData[i].slug,
                data: {
                    title: nextCellData[i].title,
                    description: nextCellData[i].description,
                    icon: nextCellData[i].icon,
                }
            }} />)
        }
        return items
    }

    return <div className="my-[50px] md:my-[50px]">
        <BoundsWrapper>
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-semibold text-center md:text-left">{doc.data.title}</h1>
                <MarkdownRenderer content={doc.content} />
                <div className="pt-[50px] space-y-2">
                    <h4 className="text-2xl font-semibold">Recommended Docs:</h4>
                    <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                        {getNext()}
                    </div>
                </div>
            </div>
        </BoundsWrapper>
    </div>
}

export async function getStaticPaths() {
    const docs = await getAllDocs();

    return {
        paths: docs.map((doc) => {
            return {
                params: {
                    slug: doc.slug,
                },
            };
        }),
        fallback: false,
    };
}

export default Doc