import{$b as u,Fa as c,J as l,_ as h,cc as g,e as a,ia as n,pa as p}from"./chunk-UWKP3EI4.js";function v(i){i||(p(v),i=n(c));let t=new a(s=>i.onDestroy(s.next.bind(s)));return s=>s.pipe(l(t))}var o=i=>Object.entries(i).map(t=>t.join("=")).join("&");var O=(()=>{let t=class t{constructor(){this.baseUrl=g.BASE_URL,this.moviesApiUrl=`${this.baseUrl}/movie`,this.baseSearchApiUrl=`${this.baseUrl}/search`,this.discoverApiUrl=`${this.baseUrl}/discover/movie`,this.movieSearchApiUrl=`${this.baseSearchApiUrl}/movie`,this.movieImagesApiUrl=e=>`${this.moviesApiUrl}/${e}/images`,this.configApiUrl=`${this.baseUrl}/configuration`,this.genreApiUrl=e=>`${this.baseUrl}/genre/${e}/list`,this.releaseDatesApiUrl=e=>`${this.moviesApiUrl}/${e}/release_dates`,this.reviewsApiUrl=e=>`${this.moviesApiUrl}/${e}/reviews`,this.similarApiUrl=e=>`${this.moviesApiUrl}/${e}/similar`,this.peopleApiUrl=`${this.baseUrl}/person/popular`,this.peopleDetailsApiUrl=e=>`${this.baseUrl}/person/${e}`,this.tvApiUrl=`${this.baseUrl}/tv`,this.tvSearchApiUrl=`${this.baseSearchApiUrl}/tv`,this.http=n(u)}getMovies(e){return this.http.get(`${this.moviesApiUrl}/${e.list}?&language=${e.language??"en-US"}&page=${e.page??1}`)}getMovieDetail(e){return this.http.get(`${this.moviesApiUrl}/${e}`)}searchMovies(e){let r=e?`${this.movieSearchApiUrl}?${o(e)}`:this.movieSearchApiUrl;return this.http.get(r)}discoverMovies(e){let r=e?`${this.discoverApiUrl}?${o(e)}`:`${this.discoverApiUrl}`;return this.http.get(r)}getConfig(){return this.http.get(`${this.configApiUrl}`)}getGenres(e="movie"){return this.http.get(`${this.genreApiUrl(e)}`)}getReleaseDates(e){return this.http.get(`${this.releaseDatesApiUrl(e)}`)}getReviews(e){return this.http.get(`${this.reviewsApiUrl(e)}`)}getMovieImages(e){return this.http.get(`${this.movieImagesApiUrl(e)}`)}getMovieCredits(e){return this.http.get(`${this.moviesApiUrl}/${e}/credits`)}getSimilar(e){return this.http.get(`${this.similarApiUrl(e)}`)}getPopularPeople(){return this.http.get(`${this.peopleApiUrl}?page=1&language=en-US`)}getPeopleDetails(e){return this.http.get(`${this.peopleDetailsApiUrl(e)}`)}getTVShows(e){return this.http.get(`${this.tvApiUrl}/${e.list}?&language=${e.language??"en-US"}&page=${e.page??1}`)}getTVShowDeatils(e){return this.http.get(`${this.tvApiUrl}/${e}`)}searchTVShows(e){return this.http.get(`${this.tvSearchApiUrl}?query=${e.query}`)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{v as a,O as b};
