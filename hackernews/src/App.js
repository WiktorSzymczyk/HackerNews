import { useState, useEffect } from "react"
// import format from "date-fns/format"
// You can use the import above or the one below
import { format } from "date-fns"

function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState("programming")
  const [text, setText] = useState("")
  const [largeTitle, setLargeTitle] = useState([])
  const [isLoading, setIsLoading] = useState(true) // loading state

  useEffect(() => {
    setIsLoading(true)

    const fetchNews = async () => {
      const url = `https://hn.algolia.com/api/v1/search?query=${query}`
      const res = await fetch(url)
      const data = await res.json()
      // You can change the number of items you get back in your response using
      // the `Array.length` method, as demonstrated below. Uncomment the line and
      // reload your app to see it in action.
      // data.hits.length = 10
      setItems(data.hits)
      setLargeTitle(data.hits[0])
    }

    fetchNews()
    setIsLoading(false)
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      console.log("Input is empty")
    } else {
      setQuery(text)
      setText("")
      console.log(text)
      console.log(query)
    }
  }

  return (
    <>
      <main>
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
            {/* Search form */}
            <form
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search for something..."
                autoComplete="off"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type="submit"
                onClick={handleSubmit}
              >
                Search
              </button>
            </form>
            {/* End of search form */}

            <article>
              <h1>
                {largeTitle.title}
              </h1>
              <a
                href={largeTitle.url}
                target="_blank"
                rel="noreferrer"
                >
                Read Full Story
              </a>
            </article>

            <article>
              <p>
                Category:{" "}
                <span>
                  {query}
                </span>
              </p>
            </article>

            <section >
              {items.map((item) => {
                const { author, created_at, objectID, title, url } = item

                return (
                  <article key={objectID}>
                    <h3>
                      {title}
                    </h3>
                    <article>
                      <p>
                        By <em>{author}</em>
                      </p>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopenner noreferrer"
                        >
                        Read More
                      </a>
                    </article>
                    <p>
                      {/* Format date using the `format` method from `date-fns` */}
                      {format(new Date(created_at), "dd MMM yyyy")}
                    </p>
                  </article>
                )
              })}
            </section>
          </>
        )}
      </main>
      </>
  );
}

export default App;
