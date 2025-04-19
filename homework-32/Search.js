export class Search {
  constructor(params) {
    const defaultOptions = {
      debounceTimeout: null,
      timeOut: 500,
    };
    const options = {
      ...defaultOptions,
      ...params,
    };
    this.searchInput = document.getElementById("searchInput");
    this.resultsContainer = document.getElementById("results");
    this.API_KEY = options.API_KEY;
    this.baseUrl = `https://www.omdbapi.com/?apikey=${this.API_KEY}&s=`;
    this.searchInput.addEventListener("input", () => {
      const query = this.searchInput.value.trim();
      clearTimeout(options.debounceTimeout);
      options.debounceTimeout = setTimeout(async () => {
        try {
          if (!this.API_KEY) {
            this.displayError("🔑 API ключ не вказано");
            return;
          }
          await this.search(query);
        } catch (error) {
          this.displayError("Сталася неочікувана помилка під час пошуку.");
          console.error(error);
        }
      }, options.timeOut);
    });
  }

  async search(query) {
    try {
      this.resultsContainer.innerHTML = "";
      if (!query) {
        return;
      }
      const response = await fetch(`${this.baseUrl}${query}`);
      if (!response.ok) {
        console.error(`❌HTTP error! Status: ${response.status}`);
        return response.status;
      }
      const data = await response.json();
      if (data.Response === "True") {
        this.displayResults(data.Search);
      } else {
        const notFound = document.createElement("p");
        notFound.classList.add("notFound");
        notFound.textContent = "Нічого не знайдено";
        this.resultsContainer.appendChild(notFound);
      }
    } catch (error) {
      this.displayError(
        "⚠️ Помилка з'єднання. Перевірте інтернет або спробуйте пізніше.",
      );
      console.error(error);
    }
  }

  displayResults(movies) {
    this.resultsContainer.innerHTML = "";
    const fragment = new DocumentFragment();
    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const image = document.createElement("img");
      image.src =
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/150";
      image.alt = "Poster";
      const cardGroup = document.createElement("div");
      cardGroup.classList.add("card-group");
      const title = document.createElement("h3");
      title.textContent = movie.Title;
      const year = document.createElement("p");
      year.textContent = movie.Year;
      cardGroup.appendChild(title);
      cardGroup.appendChild(year);
      card.appendChild(image);
      card.appendChild(cardGroup);
      fragment.appendChild(card);
    });
    this.resultsContainer.appendChild(fragment);
  }

  displayError(message) {
    this.resultsContainer.innerHTML = "";
    const errorElement = document.createElement("p");
    errorElement.classList.add("error-message");
    errorElement.textContent = message;
    this.resultsContainer.appendChild(errorElement);
  }
}
