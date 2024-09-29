document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.getElementById('bookContainer');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    const books = [
        { title: "Izahay dia zanaky ny porofo", cover: "assets/couverture/gasy/izahay dia zanaka porofo.png", description: "boky hidayat" },
        { title: "Tafsir souratioul-hamd", cover: "assets/couverture/gasy/tafsir.png", description: "Description du livre 2" },
        { title: "Livre 2", cover: "assets/couverture/gasy/tafsir 2.png", description: "Anaran’ilay boky: “Tafsïr sourat al-Hamd sy ny djouz fahatelopolo”. Nofakafakain’ny:           Sheikh Salim Manrouf Natonta: Voalohany Navoaka:  Famoaham-boky:                Teto Antananarivo, taona 1442H/2020.  Print Express Tél: 22 697 62 Fax: 22 551 53 Imprimatur: INISMA " },
        { title: "Livre 2", cover: "assets/couverture/gasy/ny finoantsika.png", description: "Description du livre 4" },
        { title: "Livre 2", cover: "assets/couverture/gasy/ashoura.png", description: "Description du livre 2" },
        { title: "Livre 2", cover: "assets/couverture/gasy/debat chiite et sunnite.png", description: "Description du livre 2" },
        { title: "Livre 2", cover: "assets/couverture/gasy/fiq maisar.png", description: "Description du livre 2" },
        { title: "Livre 2", cover: "assets/couverture/gasy/Ny marina amijn'ny tantaran'ny imam houssein as tao karbala.png", description: "Description du livre 2" },
        { title: "Livre 2", cover: "assets/couverture/gasy/isanandro.png", description: "Description du livre 2" },
        { title: "Livre 2", cover: "assets/couverture/gasy/jesoa kristy.png", description: "Description du livre 2" },
        { title: "Livre 2", cover: "assets/scanner/scanner_20240925_100510.jpg", description: "Description du livre 2" },
        { title: "Livre 2", cover: "assets/scanner/silsila.jpg", description: "Description du livre 2" },
        { title: "Livre 2", cover: "assets/scanner/anqaidona.jpg", description: "Description du livre 2" },
        { title: "Livre 2", cover: "assets/scanner/debat.jpg", description: "Description du livre 2" },
    ];

    function createBookCard(book) {
        return `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 book-card">
                <div class="card h-100 shadow-sm">
                    <img src="${book.cover}" class="card-img-top" alt="${book.title}" loading="lazy">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text flex-grow-1">${book.description}</p>
                        <div class="mt-auto">
                            <a href="#" class="btn btn-primary btn-sm me-2">Lire en ligne</a>
                            <a href="#" class="btn btn-secondary btn-sm">Télécharger PDF</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function displayBooks(booksToShow) {
        bookContainer.innerHTML = booksToShow.map(createBookCard).join('');
    }

    displayBooks(books);

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.description.toLowerCase().includes(searchTerm)
        );
        displayBooks(filteredBooks);
        if (filteredBooks.length === 0) {
            bookContainer.innerHTML = '<p class="text-center">Aucun livre trouvé. Veuillez essayer une autre recherche.</p>';
        }
    });

    bookContainer.addEventListener('mouseover', function(e) {
        const card = e.target.closest('.book-card');
        if (card) {
            card.style.transform = 'scale(1.03)';
            card.style.transition = 'transform 0.3s ease';
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        }
    });

    bookContainer.addEventListener('mouseout', function(e) {
        const card = e.target.closest('.book-card');
        if (card) {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        }
    });

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    observer.unobserve(image);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
    }

    let currentPage = 1;
    const booksPerPage = 12;

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
            loadMoreBooks();
        }
    });

    function loadMoreBooks() {
        const start = currentPage * booksPerPage;
        const end = start + booksPerPage;
        const moreBooks = books.slice(start, end);
        
        if (moreBooks.length > 0) {
            bookContainer.innerHTML += moreBooks.map(createBookCard).join('');
            currentPage++;
        }
    }
});
