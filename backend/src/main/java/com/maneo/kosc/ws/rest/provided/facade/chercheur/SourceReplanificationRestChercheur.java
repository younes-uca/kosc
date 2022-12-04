package com.maneo.kosc.ws.rest.provided.facade.chercheur;

import com.maneo.kosc.service.chercheur.facade.SourceReplanificationChercheurService;

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
import com.maneo.kosc.bean.referentiel.SourceReplanification;
import com.maneo.kosc.ws.rest.provided.converter.referentiel.SourceReplanificationConverter;
import com.maneo.kosc.ws.rest.provided.vo.referentiel.SourceReplanificationVo;

@Api("Manages sourceReplanification services")
@RestController
@RequestMapping("api/chercheur/sourceReplanification")
public class SourceReplanificationRestChercheur {

    @Autowired
    private SourceReplanificationChercheurService sourceReplanificationService;

    @Autowired
    private SourceReplanificationConverter sourceReplanificationConverter;


    @ApiOperation("Updates the specified  sourceReplanification")
    @PutMapping("/")
    public SourceReplanificationVo update(@RequestBody SourceReplanificationVo sourceReplanificationVo) {
        SourceReplanification sourceReplanification = sourceReplanificationConverter.toItem(sourceReplanificationVo);
        sourceReplanification = sourceReplanificationService.update(sourceReplanification);
        return sourceReplanificationConverter.toVo(sourceReplanification);
    }

    @ApiOperation("Finds a list of all sourceReplanifications")
    @GetMapping("/")
    public List<SourceReplanificationVo> findAll() {
        return sourceReplanificationConverter.toVo(sourceReplanificationService.findAll());
    }

    @ApiOperation("Finds a sourceReplanification with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public SourceReplanificationVo findByIdWithAssociatedList(@PathVariable Long id) {
        return sourceReplanificationConverter.toVo(sourceReplanificationService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search sourceReplanification by a specific criteria")
    @PostMapping("/search")
    public List<SourceReplanificationVo> findByCriteria(@RequestBody SourceReplanificationVo sourceReplanificationVo) {
        return sourceReplanificationConverter.toVo(sourceReplanificationService.findByCriteria(sourceReplanificationVo));
    }

    @ApiOperation("Finds a sourceReplanification by id")
    @GetMapping("/id/{id}")
    public SourceReplanificationVo findById(@PathVariable Long id) {
        return sourceReplanificationConverter.toVo(sourceReplanificationService.findById(id));
    }

    @ApiOperation("Saves the specified  sourceReplanification")
    @PostMapping("/")
    public SourceReplanificationVo save(@RequestBody SourceReplanificationVo sourceReplanificationVo) {
        SourceReplanification sourceReplanification = sourceReplanificationConverter.toItem(sourceReplanificationVo);
        sourceReplanification = sourceReplanificationService.save(sourceReplanification);
        return sourceReplanificationConverter.toVo(sourceReplanification);
    }

    @ApiOperation("Delete the specified sourceReplanification")
    @DeleteMapping("/")
    public int delete(@RequestBody SourceReplanificationVo sourceReplanificationVo) {
        SourceReplanification sourceReplanification = sourceReplanificationConverter.toItem(sourceReplanificationVo);
        return sourceReplanificationService.delete(sourceReplanification);
    }

    @ApiOperation("Deletes a sourceReplanification by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return sourceReplanificationService.deleteById(id);
    }


}
