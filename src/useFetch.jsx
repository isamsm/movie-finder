export default function useFetch() {
    async function fetchMovies(genre, movieList, url, firstNum, secNum) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjUwODIzNGRkNjQwYzdiOGRhNGUzOGQ5YmJmNTg3YyIsIm5iZiI6MTc4MDk1Mjk2OS4xMjYwMDAyLCJzdWIiOiI2YTI3MmY4OWM4YWIwNDM2OTk2NGFlMzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SFbCgB7QvuT_Khf30PFMw2p5bGACjN4Kxnls3rfK7QQ'
                }
            })

            const data = await response.json();
            let dataLimited
            
            if(firstNum < data.results.length || secNum < data.results.length) {
                dataLimited = data.results.slice(firstNum, secNum)
            } else {
                dataLimited = data.results.slice(0, 7)
            }

            if(dataLimited) {
                movieList.current.innerHTML = `
                    <div class="lg:mt-10 mt-8 lg:max-w-[336px] max-w-[300px] w-full py-8 border border-defalt-grey rounded-[4px] flex flex-col items-center gap-3 lg:text-lg text-sm text-defalt-grey text-center mx-auto">
                        ${dataLimited.map(movie => `
                            <p class="text-wrap lg:max-w-[300px] max-w-[280px]"> ${movie.title} </p>
                        `).join('')}
                    </div>
                `
            }
        } catch (error) {
            console.error("Fetch operation failed:", error.message);
        }
    }

    return { fetchMovies }
}