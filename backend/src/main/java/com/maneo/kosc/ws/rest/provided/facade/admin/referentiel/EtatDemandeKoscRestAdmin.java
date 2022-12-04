package com.maneo.kosc.ws.rest.provided.facade.admin.referentiel;

import com.maneo.kosc.service.admin.facade.referentiel.EtatDemandeKoscAdminService;

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
import com.maneo.kosc.bean.referentiel.EtatDemandeKosc;
import com.maneo.kosc.ws.rest.provided.converter.referentiel.EtatDemandeKoscConverter;
import com.maneo.kosc.ws.rest.provided.vo.referentiel.EtatDemandeKoscVo;

@Api("Manages etatDemandeKosc services")
@RestController
@RequestMapping("api/admin/etatDemandeKosc")
public class EtatDemandeKoscRestAdmin {

    @Autowired
    private EtatDemandeKoscAdminService etatDemandeKoscService;

    @Autowired
    private EtatDemandeKoscConverter etatDemandeKoscConverter;


    @ApiOperation("Updates the specified  etatDemandeKosc")
    @PutMapping("/")
    public EtatDemandeKoscVo update(@RequestBody EtatDemandeKoscVo etatDemandeKoscVo) {
        EtatDemandeKosc etatDemandeKosc = etatDemandeKoscConverter.toItem(etatDemandeKoscVo);
        etatDemandeKosc = etatDemandeKoscService.update(etatDemandeKosc);
        return etatDemandeKoscConverter.toVo(etatDemandeKosc);
    }

    @ApiOperation("Finds a list of all etatDemandeKoscs")
    @GetMapping("/")
    public List<EtatDemandeKoscVo> findAll() {
        return etatDemandeKoscConverter.toVo(etatDemandeKoscService.findAll());
    }

    @ApiOperation("Finds a etatDemandeKosc with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public EtatDemandeKoscVo findByIdWithAssociatedList(@PathVariable Long id) {
        return etatDemandeKoscConverter.toVo(etatDemandeKoscService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search etatDemandeKosc by a specific criteria")
    @PostMapping("/search")
    public List<EtatDemandeKoscVo> findByCriteria(@RequestBody EtatDemandeKoscVo etatDemandeKoscVo) {
        return etatDemandeKoscConverter.toVo(etatDemandeKoscService.findByCriteria(etatDemandeKoscVo));
    }

    @ApiOperation("Finds a etatDemandeKosc by id")
    @GetMapping("/id/{id}")
    public EtatDemandeKoscVo findById(@PathVariable Long id) {
        return etatDemandeKoscConverter.toVo(etatDemandeKoscService.findById(id));
    }

    @ApiOperation("Saves the specified  etatDemandeKosc")
    @PostMapping("/")
    public EtatDemandeKoscVo save(@RequestBody EtatDemandeKoscVo etatDemandeKoscVo) {
        EtatDemandeKosc etatDemandeKosc = etatDemandeKoscConverter.toItem(etatDemandeKoscVo);
        etatDemandeKosc = etatDemandeKoscService.save(etatDemandeKosc);
        return etatDemandeKoscConverter.toVo(etatDemandeKosc);
    }

    @ApiOperation("Delete the specified etatDemandeKosc")
    @DeleteMapping("/")
    public int delete(@RequestBody EtatDemandeKoscVo etatDemandeKoscVo) {
        EtatDemandeKosc etatDemandeKosc = etatDemandeKoscConverter.toItem(etatDemandeKoscVo);
        return etatDemandeKoscService.delete(etatDemandeKosc);
    }

    @ApiOperation("Deletes a etatDemandeKosc by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return etatDemandeKoscService.deleteById(id);
    }


}
