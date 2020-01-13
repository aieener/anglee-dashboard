package com.aieener.anglee.dashboard.vo;

import lombok.Data;

import java.io.Serializable;

@Data
public class ResultVO<T> implements Serializable {
    private static final long serialVersionUID = -3600528772705873L;
    private Integer code;
    private String msg;
    private T data;
}
