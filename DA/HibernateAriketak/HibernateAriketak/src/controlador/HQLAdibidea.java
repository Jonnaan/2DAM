package controlador;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import modelo.Departamentos;

public class HQLAdibidea {

	public static void main(String[] args) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		System.out.println("**************** KONTSULTA 1 ****************");
		String hql = "from Departamentos as depar where depar.loc = 'Bilbao' and depar.dnombre = 'PRODUCCION' ";
		Query q = session.createQuery(hql);
		List<?> filas = q.list();
		for (int i = 0; i < filas.size(); i++) {
		Departamentos dep = (Departamentos) filas.get(i);
		System.out.println(dep.getDeptNo());
		System.out.println(dep.getDnombre());
		System.out.println(dep.getLoc());
		}
		System.out.println("*********************************************");
		session.close();
	}
}
