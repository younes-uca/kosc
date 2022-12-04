package com.maneo.kosc.ws.rest.provided.facade.admin.referentiel;

import com.maneo.kosc.service.admin.facade.referentiel.CauseKoOkAdminService;

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
import com.maneo.kosc.bean.referentiel.CauseKoOk;
import com.maneo.kosc.ws.rest.provided.converter.referentiel.CauseKoOkConverter;
import com.maneo.kosc.ws.rest.provided.vo.referentiel.CauseKoOkVo;

@Api("Manages causeKoOk services")
@RestController
@RequestMapping("api/admin/causeKoOk")
public class CauseKoOkRestAdmin {

    @Autowired
    private CauseKoOkAdminService causeKoOkService;

    @Autowired
    private CauseKoOkConverter causeKoOkConverter;


    @ApiOperation("Updates the specified  causeKoOk")
    @PutMapping("/")
    public CauseKoOkVo update(@RequestBody CauseKoOkVo causeKoOkVo) {
        CauseKoOk causeKoOk = causeKoOkConverter.toItem(causeKoOkVo);
        causeKoOk = causeKoOkService.update(causeKoOk);
        return causeKoOkConverter.toVo(causeKoOk);
    }

    @ApiOperation("Finds a list of all causeKoOks")
    @GetMapping("/")
    public List<CauseKoOkVo> findAll() {
        return causeKoOkConverter.toVo(causeKoOkService.findAll());
    }

    @ApiOperation("Finds a causeKoOk with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public CauseKoOkVo findByIdWithAssociatedList(@PathVariable Long id) {
        return causeKoOkConverter.toVo(causeKoOkService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search causeKoOk by a specific criteria")
    @PostMapping("/search")
    public List<CauseKoOkVo> findByCriteria(@RequestBody CauseKoOkVo causeKoOkVo) {
        return causeKoOkConverter.toVo(causeKoOkService.findByCriteria(causeKoOkVo));
    }

    @ApiOperation("Finds a causeKoOk by id")
    @GetMapping("/id/{id}")
    public CauseKoOkVo findById(@PathVariable Long id) {
        return causeKoOkConverter.toVo(causeKoOkService.findById(id));
    }

    @ApiOperation("Saves the specified  causeKoOk")
    @PostMapping("/")
    public CauseKoOkVo save(@RequestBody CauseKoOkVo causeKoOkVo) {
        CauseKoOk causeKoOk = causeKoOkConverter.toItem(causeKoOkVo);
        causeKoOk = causeKoOkService.save(causeKoOk);
        return causeKoOkConverter.toVo(causeKoOk);
    }

    @ApiOperation("Delete the specified causeKoOk")
    @DeleteMapping("/")
    public int delete(@RequestBody CauseKoOkVo causeKoOkVo) {
        CauseKoOk causeKoOk = causeKoOkConverter.toItem(causeKoOkVo);
        return causeKoOkService.delete(causeKoOk);
    }

    @ApiOperation("Deletes a causeKoOk by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return causeKoOkService.deleteById(id);
    }


}
