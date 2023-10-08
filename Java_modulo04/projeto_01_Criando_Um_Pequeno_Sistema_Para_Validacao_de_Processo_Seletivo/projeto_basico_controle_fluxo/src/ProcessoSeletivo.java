import java.util.concurrent.ThreadLocalRandom;

public class ProcessoSeletivo {
    public static void main(String[] args) {
        //selecaoCandidatos();
        imprimirSeleciondados();
    }

    static void imprimirSeleciondados(){
        String [] candidatos = {"FELIPE","MÁRCIA","JULIA","PAULO","AUGUSTO"};

        //forma indexada
        //quando preciso do indice para complementar a lógica
        System.out.println("Imprimindo a lista de candidatos informando o indice do elemento");
        for(int indice=0; indice<candidatos.length; indice++) {
            System.out.println("O candidato de n°  " + (indice+1) + " é " + candidatos[indice] );
        }
        //forma abrevida
        //interação total sem precisar da posição ou indice
        System.out.println("Forma abreviada de interação for each");

        for(String candidato: candidatos) {
            System.out.println("O candidato selecionado foi: " + candidato);
        }
    }
    static void selecaoCandidatos(){
        // Array com a lista de candidatos
        String [] candidatos = {"FELIPE","MÁRCIA","JULIA","PAULO","AUGUSTO","MÔNICA","FABRÍCIO","MIRELA","DANIELA","JORGE"};

        int candidatosSelecionados = 0;
        int candidatosAtuais = 0;
        double salarioBase = 2000.0;
        while (candidatosSelecionados < 5 && candidatosAtuais < candidatos.length ){
            String candidato = candidatos[candidatosAtuais];
            double salarioPretendido = valorPretendido();

            System.out.println("o candidato" + candidato + "solicitou este valor de salario" + salarioPretendido);
            if(salarioBase >= salarioPretendido){
                System.out.println("O candidato" + candidato + "foi selecionado para a vaga");
                candidatosSelecionados++;
            }
            candidatosAtuais++;
        }
    }

    static double valorPretendido() {
        return ThreadLocalRandom.current().nextDouble(1800, 2200);
    }
    static void analisarCandidato(double salarioPretendido) {
        double salarioBase = 2000.0;
        if (salarioBase > salarioPretendido) {
            System.out.println("LIGAR PARA 0 CANDIDATO");
        } else if (salarioBase == salarioPretendido)
            System.out.println("LIGAR PARA 0 CANDIDATO COM CONTRA PROPOSTA");
        else {
            System.out.println("AGUARDANDO 0 RESULTADO DOS DEMAIS CANDIDATOS");
        }
    }
}