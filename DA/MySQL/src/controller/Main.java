package controller;

import modelo.departamentos;
import modelo.empleado;
import modelo.konexioa;

public class Main {
	
	public static void main(String[] args) {
		
		departamentos depar = new departamentos();
		empleado emp = new empleado();

//		depar.aurkeztuDepartamentuak();
//		depar.aurkeztuDepartamentua();;
//		emp.empleadoMaxSal();
//		depar.lortuDepartamentuakP();
//		depar.lortuDepartamentuaP();
//		emp.lortuEmpleatua();
//		depar.sortuDepartamentua();
//		emp.addDeptMarketing();
//		emp.actualizarSalariosMarketing(1700);
		depar.eliminarDeptMarketing();
		
	}

}
