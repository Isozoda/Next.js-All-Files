
export default async function ProductById({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <div>My Post: {id}</div>
}
