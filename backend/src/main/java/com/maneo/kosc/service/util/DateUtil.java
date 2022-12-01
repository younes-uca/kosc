package com.maneo.kosc.service.util;


import java.sql.Time;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class DateUtil {

    public static String formateDate(Date date) {
        return formateDate("yyyy-MM-dd hh:mm:ss.SSS", date);
    }

    public static String formateDate(String pattern, Date date) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        if (date != null) {
            return simpleDateFormat.format(date);
        } else {
            return "";
        }
    }

    public static Date parse(String date) {
        if (date == null || date.isEmpty()) {
            return null;
        } else {
            try {
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
                return simpleDateFormat.parse(date);
            } catch (Exception ex) {
                return null;
            }
        }
    }


    public static Date parseTime(String date) {
        if (date == null || date.isEmpty()) {
            return null;
        } else {
            try {
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
                return simpleDateFormat.parse(date);
            } catch (Exception ex) {
                System.out.println(ex);
                return null;
            }
        }
    }
    public static Date parseTimestampUniversalFormat(String date) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");
            date=date.replace("T"," ");
            date=date.replace("Z","");
            Date parsedDate = dateFormat.parse(date);
            Timestamp timestamp = new java.sql.Timestamp(parsedDate.getTime());
            return timestamp;
        } catch (Exception e) {
            return null;
        }
    }

    public static Date parseTimestamp(String date) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");
            date=date.replace("T"," ");
            date=date.replace("Z","");
            Date parsedDate = dateFormat.parse(date);
            Timestamp timestamp = new java.sql.Timestamp(parsedDate.getTime());
            return timestamp;
        } catch (Exception e) {
            return null;
        }
    }

    public static Time parseTimestampDate(String date) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");
            //date=date.replace("T"," ");
           // date=date.replace("Z","");
            Date parsedDate = dateFormat.parse(date);
            Time timestamp = new java.sql.Time(parsedDate.getTime());
            return timestamp;
        } catch (Exception e) {
            return null;
        }
    }




    public static Date parseTimestamp(String date, String pattern) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
            Date parsedDate = dateFormat.parse(date);
            Timestamp timestamp = new java.sql.Timestamp(parsedDate.getTime());
            return timestamp;
        } catch (Exception e) {
            return null;
        }
    }

    public static java.sql.Date convertFormUtilToSql(java.util.Date date) {
        if (date != null) {
            return new java.sql.Date(date.getTime());
        } else {
            return null;
        }
    }

    public static java.sql.Timestamp convertFormUtilToTimestamp(java.util.Date date) {
        if (date != null) {
            return new java.sql.Timestamp(date.getTime());
        } else {
            return null;
        }
    }

    public static String now() {
        LocalDate todaysDate = LocalDate.now();
        String text = todaysDate.format(DateTimeFormatter.ofPattern("yyyy MM dd"));
        return text;
    }

    public static Date toDate(LocalDate localDate) {

        ZoneId defaultZoneId = ZoneId.systemDefault();
        Date date = Date.from(localDate.atStartOfDay(defaultZoneId).toInstant());

        return date;
    }

    public static Date getDemain(){
      return getNowPlusDay(1);
    }
    public static Date getApresDemain(){
        return getNowPlusDay(2);

    }
    public static Date getApresApresDemain(){
        return getNowPlusDay(3);
    }

    public static Date getApresApresApresDemain(){
        return getNowPlusDay(4);
    }


    private static Date getNowPlusDay(int day){
        Date today = new Date();
        Date result = new Date(today.getTime() + (1000 * 60 * 60 * 24 * day));

        return result;
    }

    public static long calculerDifferenceHeure(Date date){
        if(date == null){
            return 0L;
        }
        return calculerDifferenceHeure(date, new Date());
    }
    public static long calculerDifferenceHeure(Date startDate, Date endDate){

        //milliseconds
        long different =  endDate.getTime() - startDate.getTime();

        long secondsInMilli = 1000;
        long minutesInMilli = secondsInMilli * 60;
        long hoursInMilli = minutesInMilli * 60;
        long daysInMilli = hoursInMilli * 24;

        long elapsedDays = different / daysInMilli;
        different = (different % daysInMilli);

        long elapsedHours = elapsedDays * 24 + different / hoursInMilli;
        different =  different % hoursInMilli;

        long elapsedMinutes = different / minutesInMilli;
        different = different % minutesInMilli;

        long elapsedSeconds = different / secondsInMilli;

        return elapsedHours;

    }

//    public static long calculerDifference(LocalDate startDate, LocalDate endDate){
//
//        long different =  endDate.now() - startDate.now();
//
//        long secondsInMilli = 1000;
//        long minutesInMilli = secondsInMilli * 60;
//        long hoursInMilli = minutesInMilli * 60;
//        long daysInMilli = hoursInMilli * 24;
//
//        long elapsedDays;
//        long elapsedHours ;
//
//
//
//
//        for (LocalDate date = startDate; date.compareTo(endDate) <= 0; date = date.plusDays(1)  {
//            boolean cd = isWeekEnd(endDate);
//            if( !isWeekEnd(endDate) ){
//                elapsedDays = different / daysInMilli;
//                different = (different % daysInMilli);
//
//                elapsedHours = elapsedDays * 24 + different / hoursInMilli;
//            } else {
//            }
//
//        }
//        return elapsedHours;
//    }


    public static boolean isWeekEnd(LocalDate ld) {
        DayOfWeek d = ld.getDayOfWeek();
        return d == DayOfWeek.SATURDAY || d == DayOfWeek.SUNDAY;
    }



    public static LocalDate convert(Date dateToConvert) {
        if(dateToConvert != null){
            String pattern = "dd/MM/yyyy";
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);

            String dateAsString = formateDate(pattern, dateToConvert);
            LocalDate localDate = LocalDate.parse(dateAsString, formatter);
            return localDate;
        }
        return null;

    }

    public static Date convert(LocalDate localDate) {
        return Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
    }

    public static int diff(Date firstDate, Date secondDate) {
        long diffInMillies = Math.abs(secondDate.getTime() - firstDate.getTime());
        long diff = TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);
        return (int) diff;
    }

    public static Long diffDays(Date firstDate, Date secondDate) {
        Long diff = totalJourWithoutWeekEnd(firstDate, secondDate);
        return diff;
    }

    public static Long totalJourWithoutWeekEnd(Date dateMin, Date dateMax) {
        return totalJourWithoutWeekEnd(convert(dateMin), convert(dateMax));
    }

    public static Long totalJourWithoutWeekEnd(LocalDate dateMin, LocalDate dateMax) {
        Long i = 0L;
        for (LocalDate date = dateMin; date.compareTo(dateMax) <= 0; date = date.plusDays(1)) {
            if (!isWeekEnd(date)) {
                i++;
            }
        }
        return i;
    }

    public static Long totalWeekEnd(Date dateMin, Date dateMax) {
        return totalWeekEnd(convert(dateMin), convert(dateMax));
    }

    public static Date minusOneDay(Date date) {
        LocalDate localDate = convert(date);
        LocalDate minusDays = localDate.minusDays(1);
        return convert(minusDays);
    }

    public static Long totalWeekEnd(LocalDate dateMin, LocalDate dateMax) {
        Long i = 0L;
        for (LocalDate date = dateMin; date.compareTo(dateMax) <= 0; date = date.plusDays(1)) {
            if (isWeekEnd(date)) {
                i++;
            }
        }
        return i;
    }
}

