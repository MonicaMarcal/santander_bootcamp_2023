# Configurando JUnit

## Maven

Adicionar no `pom.xml` do projeto:

```xml
<dependency>  
 <groupId>org.junit.jupiter</groupId>  
 <artifactId>junit-jupiter-engine</artifactId>  
 <version>${junit.jupiter.version}</version>  
 <scope>test</scope>  
</dependency>
```
E
```xml
<properties>
<junit.jupiter.version>5.8.0</junit.jupiter.version>
</properties>
```