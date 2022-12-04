package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.OperatorChercheurService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.maneo.kosc.bean.referentiel.Operator;
import com.maneo.kosc.ws.rest.provided.converter.OperatorConverter;
import com.maneo.kosc.ws.rest.provided.vo.OperatorVo;

@Api("Manages operator services")
@RestController
@RequestMapping("api/chercheur/operator")
public class OperatorRestChercheur {

    @Autowired
    private OperatorChercheurService operatorService;

    @Autowired
    private OperatorConverter operatorConverter;


    @ApiOperation("Updates the specified  operator")
    @PutMapping("/")
    public OperatorVo update(@RequestBody OperatorVo operatorVo) {
        Operator operator = operatorConverter.toItem(operatorVo);
        operator = operatorService.update(operator);
        return operatorConverter.toVo(operator);
    }

    @ApiOperation("Finds a list of all operators")
    @GetMapping("/")
    public List<OperatorVo> findAll() {
        return operatorConverter.toVo(operatorService.findAll());
    }

    @ApiOperation("Finds a operator with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public OperatorVo findByIdWithAssociatedList(@PathVariable Long id) {
        return operatorConverter.toVo(operatorService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search operator by a specific criteria")
    @PostMapping("/search")
    public List<OperatorVo> findByCriteria(@RequestBody OperatorVo operatorVo) {
        return operatorConverter.toVo(operatorService.findByCriteria(operatorVo));
    }

    @ApiOperation("Finds a operator by id")
    @GetMapping("/id/{id}")
    public OperatorVo findById(@PathVariable Long id) {
        return operatorConverter.toVo(operatorService.findById(id));
    }

    @ApiOperation("Saves the specified  operator")
    @PostMapping("/")
    public OperatorVo save(@RequestBody OperatorVo operatorVo) {
        Operator operator = operatorConverter.toItem(operatorVo);
        operator = operatorService.save(operator);
        return operatorConverter.toVo(operator);
    }

    @ApiOperation("Delete the specified operator")
    @DeleteMapping("/")
    public int delete(@RequestBody OperatorVo operatorVo) {
        Operator operator = operatorConverter.toItem(operatorVo);
        return operatorService.delete(operator);
    }

    @ApiOperation("Deletes a operator by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return operatorService.deleteById(id);
    }


}
