async function getData() {
    const res = await fetch(process.env.URL || "");
    return res.json();
}

export default async function pageWithFetch() {
    const data = await getData();

    return (
        <main>
            WITHOUT ENV
            {data.map((el: any) => (<div key={el.id}>{el.title}</div>))}
        </main>
    )
}
