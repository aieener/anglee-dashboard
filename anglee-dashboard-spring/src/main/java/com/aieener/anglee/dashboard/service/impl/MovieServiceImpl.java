package com.aieener.anglee.dashboard.service.impl;

import com.aieener.anglee.dashboard.dataobject.Movie;
import com.aieener.anglee.dashboard.repository.MovieRepository;
import com.aieener.anglee.dashboard.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {
    private MovieRepository movieRepository;

    @Autowired
    public MovieServiceImpl(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public Movie insert(Movie movie) {
        movieRepository.save(movie);
        return movie;
    }

    @Override
    public Movie get(String title) {
        return movieRepository.findByTitle(title);
    }

    @Override
    public List<Movie> getAll() {
        return movieRepository.findAll();
    }

    @Override
    public Movie delete(String title) {
        return movieRepository.deleteByTitle(title);
    }
}
