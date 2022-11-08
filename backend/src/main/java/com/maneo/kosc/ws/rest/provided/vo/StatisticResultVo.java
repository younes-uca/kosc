package com.maneo.kosc.ws.rest.provided.vo;

import java.util.Date;
import java.util.List;

public class StatisticResultVo {

    private Date submissionDate;

    private List<StatisticVo> statisticVos;

    public StatisticResultVo(Date submissionDate, List<StatisticVo> statisticVos) {
        this.submissionDate = submissionDate;
        this.statisticVos = statisticVos;
    }

    public StatisticResultVo() {
    }

    public Date getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(Date submissionDate) {
        this.submissionDate = submissionDate;
    }

    public List<StatisticVo> getStatisticVos() {
        return statisticVos;
    }

    public void setStatisticVos(List<StatisticVo> statisticVos) {
        this.statisticVos = statisticVos;
    }

    @Override
    public String toString() {
        return "StatisticResultVo{" +
                "submissionDate=" + submissionDate +
                ", statisticVos=" + statisticVos +
                '}';
    }
}
