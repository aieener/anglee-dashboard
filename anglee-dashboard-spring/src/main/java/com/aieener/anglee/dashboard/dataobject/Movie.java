package com.aieener.anglee.dashboard.dataobject;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
public class Movie {
  @Id
  private String title;
  private Date releaseDate;
  private String imageUrl;
  private String imdbReviewId;
}
