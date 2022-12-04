package com.maneo.kosc.security.ws.rest.provided.facade;

import java.beans.Transient;
import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.maneo.kosc.security.bean.Role;
import com.maneo.kosc.security.service.facade.RoleService;

@RequestMapping("/api/roles/admin")
@RestController
@PreAuthorize("hasRole('ROLE_ADMIN')")
public class RoleRest {
    @Autowired
    private RoleService roleService;

    // @PreAuthorize("hasRole(AuthoritiesConstants.super_admin)")
    @GetMapping("/")
    public List<Role> findAll() {
        return this.roleService.findAll();
    }
    @Transient
    @DeleteMapping("/id/{id}")
    public void deleteById(Long id) {
        roleService.deleteById(id);
    }
    @PostMapping("/save/")
    public Role save(@RequestBody Role role) {
        return roleService.save(role);
    }
@PutMapping("/update/")
    public Role update(@RequestBody Role role) {
        return roleService.update(role);
    }
@Transient
@DeleteMapping("")
    public int delete(Role role) {
        return roleService.delete(role);
    }
}
