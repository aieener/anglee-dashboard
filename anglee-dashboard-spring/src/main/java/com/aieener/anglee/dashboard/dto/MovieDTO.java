package com.aieener.anglee.dashboard.dto;

import com.aieener.anglee.dashboard.enums.ReviewSourceEnum;
import lombok.Data;

import java.util.Date;
import java.util.Map;

@Data
public class MovieDTO {
    private String title;
    private Date releaseDate;
    private String imageUrl;
    private Map<ReviewSourceEnum, String> reviewIdLkup;
}
