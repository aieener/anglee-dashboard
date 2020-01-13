package com.aieener.anglee.dashboard.service;

import com.aieener.anglee.dashboard.dataobject.Movie;

import java.util.List;

public interface MovieService {
  Movie insert (Movie movie);
  Movie get (String title);
  List<Movie> getAll ();
  Movie delete (String title);
}
