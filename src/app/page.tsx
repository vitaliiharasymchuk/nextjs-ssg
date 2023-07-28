async function getData() {
    const res = await fetch(process.env.URL || "");
    return res.json();
}

export default async function Home() {
    const data = await getData();

    return (
        <main>
            WITH ENV AND NETLIFY AT TIME={process.env.WORKFLOW_RUNNING_TIME}
            {data.map((el: any) => (<div key={el.id}>{el.title}</div>))}
        </main>
    )
}
