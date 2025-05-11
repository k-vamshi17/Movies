

const movies = [
    {
        id: 1,
        title: "Baahubali: The Beginning",
        thumbnail: "https://filmfare.wwmindia.com/content/2024/jul/bestvfxmomentsbaahubali91720594186.jpg",
        year: 2015,
        language: "telugu",
        views: "150M",
        duration: "2h 39m",
        genre: ["action", "drama"]
    },
    {
        id: 2,
        title: "Dangal",
        thumbnail: "https://s1.dmcdn.net/v/Hrz9w1O28bGXmMfAZ/x1080",
        year: 2016,
        language: "hindi",
        views: "280M",
        duration: "2h 41m",
        genre: ["drama", "sports"]
    },
    {
        id: 3,
        title: "The Dark Knight",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        year: 2008,
        language: "english",
        views: "120M",
        duration: "2h 32m",
        genre: ["action", "thriller"]
    },
    {
        id: 4,
        title: "3 Idiots",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        year: 2009,
        language: "hindi",
        views: "95M",
        duration: "2h 50m",
        genre: ["comedy", "drama"]
    },
    {
        id: 5,
        title: "Arjun Reddy",
        thumbnail: "https://m.media-amazon.com/images/S/pv-target-images/1cc9add83a4387a35a0bc81dc65d18d932f2b582687b19cda4a517d2aa4c0456.jpg",
        year: 2017,
        language: "telugu",
        views: "65M",
        duration: "3h 2m",
        genre: ["romance", "drama"]
    },
    {
        id: 6,
        title: "Pulp Fiction",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        year: 1994,
        language: "english",
        views: "85M",
        duration: "2h 34m",
        genre: ["crime", "drama"]
    },
    {
        id: 7,
        title: "Vikram Vedha",
        thumbnail: "https://images.indianexpress.com/2022/09/Vikram-Vedha-poster-R-min.jpg",
        year: 2017,
        language: "tamil",
        views: "45M",
        duration: "2h 27m",
        genre: ["action", "thriller"]
    },
    {
        id: 8,
        title: "Drishyam",
        thumbnail: "https://img.indiaforums.com/article/320x180/19/4081-panorama-studios-international-ltd-acquires-the-remake-rights-of-malayalam-language-drishyam-1-and-d.jpg?c=3mPD95",
        year: 2013,
        language: "malayalam",
        views: "55M",
        duration: "2h 40m",
        genre: ["thriller", "drama"]
    },
    {
        id: 9,
        title: "KGF: Chapter 1",
        thumbnail: "https://www.filmyfenil.com/wp-content/uploads/2018/12/KGF-wallpaper.jpg",
        year: 2018,
        language: "kannada",
        views: "110M",
        duration: "2h 35m",
        genre: ["action", "drama"]
    },
    {
        id: 10,
        title: "Interstellar",
        thumbnail: "https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2021/07/09/1919558723588/INST_SAlone_16_9_1920x1080_1887272_1920x1080.jpg",
        year: 2014,
        language: "english",
        views: "75M",
        duration: "2h 49m",
        genre: ["sci-fi", "adventure"]
    },
    {
        id: 11,
        title: "Magadheera",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGqG3RoAnWaw2eShBDUvMkg05Qkl5J47DcQ&s",
        year: 2009,
        language: "telugu",
        views: "80M",
        duration: "2h 46m",
        genre: ["action", "romance"]
    },
    {
        id: 12,
        title: "Super Deluxe",
        thumbnail: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/Super_deluxe.png?vVO.aIjedL82ylReTTjFRrEGlxDMmCBI",
        year: 2019,
        language: "tamil",
        views: "35M",
        duration: "2h 56m",
        genre: ["drama", "thriller"]
    }
];


// DOM elements
const moviesContainer = document.getElementById('movies-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const languageOptions = document.querySelectorAll('.language-option');
const minYearInput = document.getElementById('min-year');
const maxYearInput = document.getElementById('max-year');
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

// Current filter state
let currentFilter = 'all';
let currentLanguage = 'all';
let minYear = 2000;
let maxYear = 2020;
let searchQuery = '';

// Initialize the page
function init() {
    renderMovies();
    setupEventListeners();
}

// Render movies based on current filters
function renderMovies() {
    moviesContainer.innerHTML = '';

    const filteredMovies = movies.filter(movie => {
        // Filter by category
        if (currentFilter !== 'all' && !movie.genre.includes(currentFilter)) {
            return false;
        }

        // Filter by language
        if (currentLanguage !== 'all' && movie.language !== currentLanguage) {
            return false;
        }

        // Filter by year range
        if (movie.year < minYear || movie.year > maxYear) {
            return false;
        }

        // Filter by search query
        if (searchQuery && !movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }

        return true;
    });

    if (filteredMovies.length === 0) {
        moviesContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 20px;">No movies found matching your criteria.</p>';
        return;
    }

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <div class="thumbnail">
                <img src="${movie.thumbnail}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x169?text=No+Image'">
            </div>
            <div class="movie-details">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-info">
                    <span class="movie-views">${movie.views} views</span>
                    <span class="movie-duration">${movie.duration}</span>
                </div>
                <div class="movie-year">${movie.year}</div>
                <div class="movie-language">${movie.language.charAt(0).toUpperCase() + movie.language.slice(1)}</div>
            </div>
        `;
        moviesContainer.appendChild(movieCard);
    });
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            renderMovies();
        });
    });

    // Language options
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            currentLanguage = option.dataset.lang;
            renderMovies();
        });
    });

    // Year range inputs
    minYearInput.addEventListener('change', () => {
        minYear = parseInt(minYearInput.value) || 1900;
        if (minYear > maxYear) {
            minYear = maxYear;
            minYearInput.value = minYear;
        }
        renderMovies();
    });

    maxYearInput.addEventListener('change', () => {
        maxYear = parseInt(maxYearInput.value) || 2020;
        if (maxYear < minYear) {
            maxYear = minYear;
            maxYearInput.value = maxYear;
        }
        renderMovies();
    });

    // Search functionality
    searchButton.addEventListener('click', () => {
        searchQuery = searchInput.value.trim();
        renderMovies();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchQuery = searchInput.value.trim();
            renderMovies();
        }
    });
}

// Initialize the app
init();