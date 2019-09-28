package com.aieener.anglee.dashboard.controller;

import com.aieener.anglee.dashboard.service.MovieService;
import com.aieener.anglee.dashboard.vo.MovieVO;
import com.aieener.anglee.dashboard.vo.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class MovieController {
  private MovieService movieService;

  @Autowired
  public MovieController(MovieService movieService) {
    this.movieService = movieService;
  }

  @GetMapping("/movies")
  public ResultVO<List<MovieVO>> movies() {
    return null;
  }
}
