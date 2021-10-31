import React from 'react'
import './HomeScreen.css'
import Navbar from '../Navbar'
import requests from '../requests'
import Banner from '../Banner'
import Row from '../Row'

function HomeScreen() {
    return (
        <div className='homescreen'>
            <Navbar />
            <Banner/>
            <Row 
                title = 'NETFLIX ORIGINALS'
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row 
                title = 'Trending'
                fetchUrl = {requests.fetchTrending}
            />
            <Row 
                title = 'Top Rated'
                fetchUrl = {requests.fetchTopRated}
            />
            <Row 
                title = 'Action Movies'
                fetchUrl = {requests.fetchActionMovies}
            />
            <Row 
                title = 'Comedy Movies'
                fetchUrl = {requests.fetchComedyMovies}
            />
            <Row 
                title = 'Romantic Movies'
                fetchUrl = {requests.fetchRomanceMovies}
            />
            <Row 
                title = 'Horror Movies'
                fetchUrl = {requests.fetchHorrorMovies}
            />
            <Row 
                title = 'Documentaries'
                fetchUrl = {requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen;