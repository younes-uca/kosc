package com.maneo.kosc.ws.rest.provided.facade.admin.template;

import com.maneo.kosc.service.admin.facade.template.TemplateEmailClientInjoinableKoscAdminService;

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
import com.maneo.kosc.bean.template.TemplateEmailClientInjoinableKosc;
import com.maneo.kosc.ws.rest.provided.converter.template.TemplateEmailClientInjoinableKoscConverter;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailClientInjoinableKoscVo;

@Api("Manages templateEmailClientInjoinableKosc services")
@RestController
@RequestMapping("api/admin/templateEmailClientInjoinableKosc")
public class TemplateEmailClientInjoinableKoscRestAdmin {

    @Autowired
    private TemplateEmailClientInjoinableKoscAdminService templateEmailClientInjoinableKoscService;

    @Autowired
    private TemplateEmailClientInjoinableKoscConverter templateEmailClientInjoinableKoscConverter;


    @ApiOperation("Updates the specified  templateEmailClientInjoinableKosc")
    @PutMapping("/")
    public TemplateEmailClientInjoinableKoscVo update(@RequestBody TemplateEmailClientInjoinableKoscVo templateEmailClientInjoinableKoscVo) {
        TemplateEmailClientInjoinableKosc templateEmailClientInjoinableKosc = templateEmailClientInjoinableKoscConverter.toItem(templateEmailClientInjoinableKoscVo);
        templateEmailClientInjoinableKosc = templateEmailClientInjoinableKoscService.update(templateEmailClientInjoinableKosc);
        return templateEmailClientInjoinableKoscConverter.toVo(templateEmailClientInjoinableKosc);
    }

    @ApiOperation("Finds a list of all templateEmailClientInjoinableKoscs")
    @GetMapping("/")
    public List<TemplateEmailClientInjoinableKoscVo> findAll() {
        return templateEmailClientInjoinableKoscConverter.toVo(templateEmailClientInjoinableKoscService.findAll());
    }

    @ApiOperation("Finds a templateEmailClientInjoinableKosc with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TemplateEmailClientInjoinableKoscVo findByIdWithAssociatedList(@PathVariable Long id) {
        return templateEmailClientInjoinableKoscConverter.toVo(templateEmailClientInjoinableKoscService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search templateEmailClientInjoinableKosc by a specific criteria")
    @PostMapping("/search")
    public List<TemplateEmailClientInjoinableKoscVo> findByCriteria(@RequestBody TemplateEmailClientInjoinableKoscVo templateEmailClientInjoinableKoscVo) {
        return templateEmailClientInjoinableKoscConverter.toVo(templateEmailClientInjoinableKoscService.findByCriteria(templateEmailClientInjoinableKoscVo));
    }

    @ApiOperation("Finds a templateEmailClientInjoinableKosc by id")
    @GetMapping("/id/{id}")
    public TemplateEmailClientInjoinableKoscVo findById(@PathVariable Long id) {
        return templateEmailClientInjoinableKoscConverter.toVo(templateEmailClientInjoinableKoscService.findById(id));
    }

    @ApiOperation("Saves the specified  templateEmailClientInjoinableKosc")
    @PostMapping("/")
    public TemplateEmailClientInjoinableKoscVo save(@RequestBody TemplateEmailClientInjoinableKoscVo templateEmailClientInjoinableKoscVo) {
        TemplateEmailClientInjoinableKosc templateEmailClientInjoinableKosc = templateEmailClientInjoinableKoscConverter.toItem(templateEmailClientInjoinableKoscVo);
        templateEmailClientInjoinableKosc = templateEmailClientInjoinableKoscService.save(templateEmailClientInjoinableKosc);
        return templateEmailClientInjoinableKoscConverter.toVo(templateEmailClientInjoinableKosc);
    }

    @ApiOperation("Delete the specified templateEmailClientInjoinableKosc")
    @DeleteMapping("/")
    public int delete(@RequestBody TemplateEmailClientInjoinableKoscVo templateEmailClientInjoinableKoscVo) {
        TemplateEmailClientInjoinableKosc templateEmailClientInjoinableKosc = templateEmailClientInjoinableKoscConverter.toItem(templateEmailClientInjoinableKoscVo);
        return templateEmailClientInjoinableKoscService.delete(templateEmailClientInjoinableKosc);
    }

    @ApiOperation("Deletes a templateEmailClientInjoinableKosc by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return templateEmailClientInjoinableKoscService.deleteById(id);
    }


}
