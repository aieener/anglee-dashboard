package com.aieener.anglee.dashboard.enums;

public enum ResultEnum {
    PARAM_ERROR(1, "param Error");
    private Integer code;
    private String message;

    ResultEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
