<?php

namespace App\Contracts;

interface AppointmentContract {

    public function index();
    public function store($params);
    public function update($id, $params);
    public function delete($id);
    public function filterByLoginUser($id, $roleId);
    public function doctorAppointmentData($id, $roleId);
    public function getAllPatientAppointment($roleId);
    public function getAllAppointmentData();
    public function getAllAppointmentDataByMonth();
    public function getAllAppointmentDataByDoctor($roleId);
    public function getDoctorAppointmentDataByMonth($roleId);
    public function getAllAppointmentChartDataByMonthName();
    public function getAllAppointmentByPatient($patientId);
    public function getAllDoctorAppointment($doctorId);
    public function getAllDoctorAppointmentSchedule($doctorId, $statusId);
}
