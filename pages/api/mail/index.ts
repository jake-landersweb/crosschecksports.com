export default async function handle(req: any, res: any) {
    const response = await fetch(process.env.HOST!.toString(), {
        method: "POST",
        headers: [["Content-Type", "application/json"], ["x-api-key", process.env.KEY!.toString()]],
        body: JSON.stringify(req.body),
    })
    console.log(response)

    if (response.status == 200) {
        res.status(200).json(response)
    } else {
        res.status(400).json(response)
    }
    res.status(200)
}