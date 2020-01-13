package com.aieener.anglee.user.service.impl;

import com.aieener.anglee.user.common.Const;
import com.aieener.anglee.user.dao.User;
import com.aieener.anglee.user.enums.ResultEnum;
import com.aieener.anglee.user.repository.UserRepository;
import com.aieener.anglee.user.service.IUserService;
import com.aieener.anglee.user.util.BcryptUtil;
import com.aieener.anglee.user.util.ResultVOUtil;
import com.aieener.anglee.user.vo.ResultVO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserRepository repo;

    @Override
    public ResultVO<User> login(String username, String password) {
        if (!repo.existsByUsername(username)) {
            return ResultVOUtil.error(ResultEnum.LOGIN_FAIL_NON_EXISTING_USER);
        }
        User user = repo.findUserByUsername(username);
        if (!BcryptUtil.matches(password, user.getPassword())) {
            return ResultVOUtil.error(ResultEnum.LOGIN_FAIL_INVALID_PASSWORD);
        }
        user.setPassword(StringUtils.EMPTY);
        return ResultVOUtil.success(user);
    }

    @Override
    public ResultVO<String> register(User user) {
        ResultVO<String> validResult = this.checkValid(user.getUsername(), Const.USERNAME);
        if (!validResult.isSuccess()) {
            return validResult;
        }

        validResult = this.checkValid(user.getUsername(), Const.EMAIL);
        if (!validResult.isSuccess()) {
            return validResult;
        }

        // set user as regular user
        user.setRole(Const.Role.ROLE_USER);
        // encrypt password
        PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        user.setPassword(BcryptUtil.encode(user.getPassword()));
        User res = repo.save(user);
        if (res == null) {
            return ResultVOUtil.error(ResultEnum.REGISTER_FAIL_DB);
        }
        return ResultVOUtil.success();
    }

    @Override
    public ResultVO<String> checkValid(String input, String type) {
        if (StringUtils.isNotBlank(type)) {
            if (Const.USERNAME.equals(type)) {
                if (repo.countUsersByUsername(input) != 0) {
                    return ResultVOUtil.error(ResultEnum.REGISTER_FAIL_EXISTING_USERNAME);
                }
            }
            if (Const.EMAIL.equals(type)) {
                if (repo.countUsersByEmail(input) != 0) {
                    return ResultVOUtil.error(ResultEnum.REGISTER_FAIL_EXISTING_EMAIL);
                }
            }
        } else {
            return ResultVOUtil.error(ResultEnum.PARAM_ERROR);
        }
        return ResultVOUtil.success();
    }
}
