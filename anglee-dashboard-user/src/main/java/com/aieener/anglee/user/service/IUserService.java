package com.aieener.anglee.user.service;

import com.aieener.anglee.user.dao.User;
import com.aieener.anglee.user.vo.ResultVO;

public interface IUserService {
    ResultVO<User> login(String username, String password);
    ResultVO<String> register(User user);
    ResultVO<String> checkValid(String input, String type);
}
