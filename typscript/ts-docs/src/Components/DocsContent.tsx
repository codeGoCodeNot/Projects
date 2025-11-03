import docsData from "./data/data";

type DocsContentProps = {
  category: string;
};

const DocsContent = ({ category }: DocsContentProps) => {
  const filteredDocs = category
    ? docsData.filter((data) => data.category === category)
    : docsData;

  return (
    <article
      className="
    mb-10 px-5 py-10
    w-[80%] max-h-[600px] mt-5 bg-[#262626] 
    border border-gray-700 shadow-2xl mx-auto
    overflow-y-auto
  "
    >
      {filteredDocs.map((data, idx) => (
        <section className="mb-4" key={idx}>
          <h1 className="text-lg font-bold mb-2">
            {data.title}
            <span className="ml-2 text-sm text-gray-400">
              ({data.category})
            </span>
          </h1>
          <div className="mb-1">{data.description}</div>
          <pre className="bg-[#181818] text-green-200 p-2 rounded text-sm overflow-x-auto whitespace-pre max-w-full">
            <code>{data.example}</code>
          </pre>
        </section>
      ))}
    </article>
  );
};

export default DocsContent;
