### Introduction
<div style="text-align:justify">

An operational amplifier is an amplifier which has high open loop gain, very high input impedance, very low output impedance and large bandwidth. This amplifier is a direct coupled device with differential inputs and a single ended output. The amplifier responds only to the difference voltage between the two input terminals. Fig.1(a) shows the most widely used symbol for a circuit with two inputs and one output. For simplicity, power supply and other pin connections are omitted. Since the input differential amplifier stage of the op amp is designed to be operated in the differential mode, the differential inputs are designated by the (+) and (-) notations. The (+) input is the non inverting input. An ac signal (or dc voltage) applied to this input produces an in phase (or same polarity) signal at the output. On the other hand, the (-) input is the inverting input because an ac signal (or dc voltage) applied to this input produces an180" out of-phase (or opposite polarity) signal at the output.

InFig. 1(a),  
V<sub>b</sub> = Voltage at the noninverting input (volts)  
V<sub>a</sub> = Voltage at the inverting input (volts)  
V<sub>o</sub> = Output voltage (volts)  
All these voltages are measured with respect to ground.  
A= Large-signal voltage gain, which is specified on the data sheet for an op-amp

Fig. 1(b) shows an equivalent circuit of an op-amp. This circuit includes important values from the data sheets: A, Rin, and Rout. Here AV<sub>in</sub> is an equivalent Thevenin voltage source, and Rout is the Thevenin equivalent resistance looking back into the output terminal of an op-amp. The equivalent circuit is useful in analyzing the basic operating principles of op-amps and in observing the effects of feedback arrangements. For the circuit shown in Fig. 1(b), the output voltage is

<center>V<sub>o</sub> = AV<sub>in</sub> = A(V<sub>b</sub> – V<sub>a</sub>)</center>

where  
V<sub>in</sub> = Difference input voltage  
Above equation indicates that the output voltage Vo is directly proportional to the algebraic difference between the two input voltages. The output signal is single ended and is referred w.r.t. the ground.
<div style="text-align:center">  

![](images/image1(a).png)

**Fig.-1(a): Schematic symbol for the op amp**

![](images/image1(b).png)

**Fig.-1(b): Equivalent circuit of an op amp**
</div>
The op-amp is a versatile device that can be used to amplify d.c. as well as a.c. input signals and was originally designed to perform mathematical operations such as addition, subtraction, multiplication, division, integration and differentiation. Thus the name operational amplifier stems from its original use for these mathematical operations and is abbreviated to op-amp.

IC 741 usually called as op-amp 741 is 8 pin dual in line package (DIP) integrated circuit consists of 8 pins as shown in Fig. 2. Terminals 2 and 3 are called input terminals. Signal applied to terminal 2 is arrived at the output terminal with the negative sign hence it is called inverting terminal while the signal applied to the terminal 3 is arrived with same sign at the output hence it is called non-inverting terminal. Power suppliesof +15 V and -15 V are applied at terminals 7 and 4 respectively. The output is obtained at the terminal 6. Terminal 1 is offset null because it has no use in general operations. The name op-amp 741 is given to this integrated circuit as it is clear from its pin configuration that there are 7 active pins having 4 input terminals(2, 3, 4 and 7) and one output terminal (6th terminal).
<div style="text-align:center">   

![](images/image2(2).png)

**Fig. 2 Pin diagram of an op-amp IC 741**
</div>

### **Adder**

Fig. 3 shows the inverting configuration with three inputs V<sub>1</sub>, V<sub>2</sub> and V<sub>3</sub>. Depending on the relationship between the feedback resistance R<sub>f</sub> and the input resistors R<sub>1</sub>, R<sub>2</sub> and R<sub>3</sub>, which can be used as a summing amplifier. The circuit’s function can be verified by examining the expression for the output voltage. In this configuration of op-amp when the three inputs V<sub>1</sub>, V<sub>2</sub> and V<sub>3</sub> are applied at the inverting terminal then they produce currents I<sub>1</sub>, I<sub>2</sub> and I<sub>3</sub> respectively. Using the concept of infinite impedance and virtual ground, we can see that inverting input of the op amp is at virtual ground (0 V) and there is no current to the input. This means that the three input currents I<sub>1</sub>, I<sub>2</sub> and I<sub>3</sub> combine at the summing point A and form the total current I<sub>f</sub> which goes through R<sub>f</sub> as shown in Fig. 3.

<center>I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub> = I<sub>f</sub></center>

When all the three inputs are applied, the output voltage is

<center>V<sub>o1</sub> = –I<sub>f</sub> R<sub>f</sub> = –R<sub>f</sub> ( I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub> )

V<sub>o1</sub> = −R<sub>f</sub> ( V<sub>1</sub>/R<sub>1</sub> + V<sub>2</sub>/R<sub>2</sub> + V<sub>3</sub>/R<sub>3</sub> ) </center>

If R<sub>1</sub> = R<sub>2</sub> = R<sub>3</sub> =R,then  

<center>V<sub>o1</sub> = −R<sub>f</sub> / R ×( V<sub>1</sub>+V<sub>2</sub>+V<sub>3</sub> ) </center>


It means that the output voltage is equal to the negative sum of all the inputs times the gain of the circuit R<sub>f</sub>/R; hence the circuit is called summing amplifier. An interesting case results when the gain of the amplifier is unity, in this case R<sub>1</sub> = R<sub>2</sub> = R<sub>3</sub> = R<sub>f</sub> and output voltage is

<center>V<sub>o1</sub> = –( V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub> )</center>

Thus, when the gain of summing amplifier is unity, the output voltage is the algebraic sum of the input voltages.
<div style="text-align:center">  

![](images/image3.png)

**Fig.-3: Inverting configuration with three inputs used as a summing amplifier**
</div>

### **Subtractor**

A basic differential amplifier can be used as a subtractor when input signals are applied at the two input terminals of op-amp i.e. one at inverting and other at non inverting terminal, then output is given by the difference of two input signals. The practical circuit of the op-amp as subtractor is given in Fig. 4. It is a combination of inverting and non inverting amplifiers. If terminal B is grounded, the circuit operates as an inverting amplifier and input V<sub>1</sub> is amplified by –R<sub>f</sub>/R<sub>1</sub>. With terminal A grounded, R<sub>f</sub> and R<sub>1</sub> function as the feedback components of a non-inverting amplifier. Input voltage V<sub>2</sub> is divided across resistors R<sub>2</sub> and R<sub>3</sub> to give V<sub>R3</sub> and then V<sub>R3</sub> is amplified by (R<sub>f</sub> + R<sub>1</sub>)/R<sub>1</sub>.  
With V<sub>2</sub> = 0,

<center>V<sub>o1</sub> = (−R<sub>f</sub>/R<sub>1</sub> )×V<sub>1</sub></center>

With V<sub>1</sub> = 0,

<center>V<sub>R3</sub> = { R<sub>3</sub>/( R<sub>3</sub> + R<sub>2</sub> )}×V<sub>2</sub></center>

and

<center>V<sub>o2</sub> = {( R<sub>f</sub> + R<sub>1</sub> )/ R<sub>1</sub>}×VR<sub>3</sub></center>

or

<center>V<sub>o2</sub> = {( R<sub>f</sub> + R<sub>1</sub> )/ R<sub>1</sub>}×{ R<sub>3</sub>/( R<sub>3</sub> + R<sub>2</sub> )}×V<sub>2</sub></center>

With R<sub>3</sub> = R<sub>f</sub> and R<sub>2</sub> = R<sub>1</sub>

<center> V<sub>o2</sub> = ( R<sub>f</sub>/R<sub>1</sub> )×V<sub>2</sub> </center>

With both signals present,

<center> V<sub>o1</sub> = V<sub>o2</sub> + V<sub>o1</sub>  
  
V<sub>o1</sub> = {( R<sub>f</sub>/R<sub>1</sub> )×V<sub>2</sub>} − {( R<sub>f</sub>/R<sub>1</sub> )×V<sub>1</sub>}

V<sub>o1</sub> = R<sub>f</sub> / R<sub>1</sub> ×(V<sub>2</sub> − V<sub>1</sub>) </center>
 

When R<sub>f</sub> and R<sub>1</sub> are equal value resistors, the output is the direct difference of the two inputs i.e.

<center> V<sub>o1</sub> = V<sub>2</sub> – V<sub>1</sub> </center>
<div style="text-align:center">  

![](images/image4.png)

**Fig.-4: Op-amp circuit used for subtraction**
</div>

### **Multiplication/Division by a constant**

The practical circuit of the op-amp as multiplication is given in Fig. 5. When the feedback resistance R<sub>f</sub> and input resistance R<sub>1</sub> are so chosen to give a constant value K<sub>m</sub> = (−R<sub>f</sub> /R<sub>1</sub>) then the input given to the inverting terminal of op-amp is multiplied at the output by this constant K<sub>m</sub>, therefore the output at the terminal 6 is given by

<center> V<sub>o1</sub> = −(R<sub>f</sub>/R<sub>1</sub>) × V<sub>in</sub>

V<sub>o1</sub> = K<sub>m</sub> × V<sub>in</sub> </center>

where K<sub>m</sub> =( −R<sub>f</sub>/R<sub>1</sub> )

When the feedback resistance R<sub>f</sub> and input resistance R<sub>1</sub> are so chosen that the ratio R<sub>f</sub>/R<sub>1</sub> give a fractional value then the input voltage given to inverting terminal of op-amp is divided at the output by this division factor K<sub>d</sub> = (−R<sub>1</sub>/R<sub>f</sub>). The circuit for this operation is shown in Fig. 5. The output is obtained at terminal 6 of op-amp by D.M.M. with respect to ground.

<center> V<sub>o1</sub> = −(R<sub>f</sub> / R<sub>1</sub>) × V<sub>in</sub> 

V<sub>o1</sub> = V<sub>in</sub>/K<sub>d</sub> </center>

where K<sub>d</sub> =( −R<sub>1</sub>/R<sub>f</sub> )
<div style="text-align:center">  

![](images/image5.png)

**Fig.-5: Op-amp circuit used for multiplication/ division**
</div>

</div>

