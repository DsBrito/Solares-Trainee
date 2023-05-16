import React from 'react';


export default function Home() {
  return (
    <div style={{ backgroundColor: '#050758' }}>
            <img 
            src="https://raw.githubusercontent.com/DsBrito/Solares-Trainee/main/images/itens/solares.png?token=GHSAT0AAAAAACCXROE6MWEDUCSK4LH6V6HQZDEAS7A" alt="solares"
            height={200}
            width={200}
            className='logo'

             />

          <button id="change-light">
              <img src="https://raw.githubusercontent.com/DsBrito/Solares-Trainee/main/images/itens/sun.png?token=GHSAT0AAAAAACCXROE77MU6L6UPI6RMOF3IZDEATGA" alt="sun-image" 
                height={200}
                width={200} 
                
                className='botton-image'
                />
          </button>
    </div>
  )
}
