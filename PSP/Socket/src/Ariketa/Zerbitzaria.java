package Ariketa;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Zerbitzaria {
	
	public static final int PORT = 5000;
	

	
	public static void main(String[] args) throws IOException {
			//Aldagaiak
            ServerSocket serverSocket =  null;
            int bezeroKop = 0;
            Socket bezeroSocket;
            
            
            serverSocket = new ServerSocket(PORT);
            System.out.println("Zerbitzaria martxan...");
            
			for (int i = 0; i < 3; i++) {
				//accept
				bezeroSocket = serverSocket.accept();
				try {
					System.out.println("Bezeroa konektatu da. IP helbidea: " + bezeroSocket.getInetAddress());
				
				//bezeroen mesua jaso
				DataInputStream dis = new DataInputStream(bezeroSocket.getInputStream());
				String jasotakomezua = dis.readUTF();
				System.out.println("Bezeroaren mezua: " + jasotakomezua);
				
				
				//bezeroari erantzuna bidali
				DataOutputStream dos = new DataOutputStream(bezeroSocket.getOutputStream());
				dos.writeUTF("Kaixo, bezeroa. Ni Zerbitzaria naiz.");
				
				dos.close();
				dis.close();
				bezeroSocket.close();
				bezeroKop++;
				} catch (IOException e) {
					System.out.println("Errorea: ezin izan da bezeroa konektatu.");
					e.printStackTrace();
				}
				
			}
			System.out.println("Nahiko egin dut ");
			
            
            
            
            
          
	}
	

	
	
}
