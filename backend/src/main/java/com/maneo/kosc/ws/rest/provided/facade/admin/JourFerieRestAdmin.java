package com.maneo.kosc.ws.rest.provided.facade.admin;

import com.maneo.kosc.bean.JourFerie;
import com.maneo.kosc.service.admin.facade.JourFerieAdminService;
import com.maneo.kosc.ws.rest.provided.converter.JourFerieConverter;
import com.maneo.kosc.ws.rest.provided.vo.JourFerieVo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages jourFerie services")
@RestController
@RequestMapping("api/admin/jourFerie")
public class JourFerieRestAdmin {

    @Autowired
    private JourFerieAdminService jourFerieService;

    @Autowired
    private JourFerieConverter jourFerieConverter;


    @ApiOperation("Updates the specified  jourFerie")
    @PutMapping("/")
    public JourFerieVo update(@RequestBody JourFerieVo jourFerieVo) {
        JourFerie jourFerie = jourFerieConverter.toItem(jourFerieVo);
        jourFerie = jourFerieService.update(jourFerie);
        return jourFerieConverter.toVo(jourFerie);
    }

    @ApiOperation("Finds a list of all jourFeries")
    @GetMapping("/")
    public List<JourFerieVo> findAll() {
        return jourFerieConverter.toVo(jourFerieService.findAll());
    }


    @ApiOperation("Search jourFerie by a specific criteria")
    @PostMapping("/search")
    public List<JourFerieVo> findByCriteria(@RequestBody JourFerieVo jourFerieVo) {
        return jourFerieConverter.toVo(jourFerieService.findByCriteria(jourFerieVo));
    }

    @ApiOperation("Finds a jourFerie by id")
    @GetMapping("/id/{id}")
    public JourFerieVo findById(@PathVariable Long id) {
        return jourFerieConverter.toVo(jourFerieService.findById(id));
    }

    @ApiOperation("Saves the specified  jourFerie")
    @PostMapping("/")
    public JourFerieVo save(@RequestBody JourFerieVo jourFerieVo) {
        JourFerie jourFerie = jourFerieConverter.toItem(jourFerieVo);
        jourFerie = jourFerieService.save(jourFerie);
        return jourFerieConverter.toVo(jourFerie);
    }

    @ApiOperation("Delete the specified jourFerie")
    @DeleteMapping("/")
    public int delete(@RequestBody JourFerieVo jourFerieVo) {
        JourFerie jourFerie = jourFerieConverter.toItem(jourFerieVo);
        return jourFerieService.delete(jourFerie);
    }

    @ApiOperation("Deletes a jourFerie by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return jourFerieService.deleteById(id);
    }



}
