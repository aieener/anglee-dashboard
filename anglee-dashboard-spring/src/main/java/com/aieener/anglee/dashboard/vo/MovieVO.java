package com.aieener.anglee.dashboard.vo;

import com.aieener.anglee.dashboard.enums.ReviewSourceEnum;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.Map;

@Data
public class MovieVO implements Serializable {
    private static final long serialVersionUID = -7448638375115447713L;
    private String title;
    @JsonProperty("date")
    private String releaseDate;
    @JsonProperty("url")
    private String imageUrl;
    @JsonProperty("ids")
    private Map<ReviewSourceEnum, String> reviewIdLkup;
}
