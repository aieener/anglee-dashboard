package com.aieener.anglee.dashboard.service.impl;

import com.aieener.anglee.dashboard.dataobject.Movie;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class MovieServiceImplTest {
  @Autowired
  private MovieServiceImpl movieService;
  @Test
  public void insert() {
    Movie m1 = new Movie();
    m1.setImageUrl("3131");
    m1.setTitle("Test");
    m1.setImdbReviewId("imdbId");
    m1.setReleaseDate(new Date());

    Movie mIn = movieService.insert(m1);
    log.info("insertMovie inserter result={}", mIn);

    Movie mBack = movieService.get("Test");
    log.info("insertMovie getter result={}", mBack);

  }

  @Test
  public void get() {
  }

  @Test
  public void getAll() {
  }

  @Test
  public void delete() {
  }
}
