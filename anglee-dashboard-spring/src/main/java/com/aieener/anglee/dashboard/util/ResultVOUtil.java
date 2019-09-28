package com.aieener.anglee.dashboard.util;

import com.aieener.anglee.dashboard.vo.ResultVO;

public class ResultVOUtil {
  public static <T> ResultVO<T> success(T object) {
    ResultVO<T> resultVO = new ResultVO<>();
    resultVO.setData(object);
    resultVO.setCode(0);
    resultVO.setMsg("success");
    return resultVO;
  }

  public static ResultVO success() {
    return success(null);
  }

  public static ResultVO error(Integer code, String msg) {
    ResultVO resultVO = new ResultVO();
    resultVO.setMsg(msg);
    resultVO.setCode(code);
    return resultVO;
  }
}
