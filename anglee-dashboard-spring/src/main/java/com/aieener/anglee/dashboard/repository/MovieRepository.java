package com.aieener.anglee.dashboard.repository;

import com.aieener.anglee.dashboard.dataobject.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, String> {
    Movie findByTitle(String title);

    Movie deleteByTitle(String title);
}
