package com.maneo.kosc.security.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.maneo.kosc.security.bean.Permission;

public interface PermissionDao extends JpaRepository<Permission, Long> {
    public Permission findByName(String name);
}
