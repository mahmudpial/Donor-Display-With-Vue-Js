<template>
  <div class="app">
    <div class="container">
      <!-- Header -->
      <header class="header">
         
          <!-- Image via CDN -->
    <img 
      src="https://cdn-icons-png.flaticon.com/512/2966/2966487.png" 
      width="120"
      alt="Blood Donation"
    />
        <h1>Blood Donation Management System</h1>
         <!-- HTML message -->
         <p v-html="htmlMessage"></p>
           <!-- Stats Card -->
       <div class="stats">
         <div class="stat-card">
           <h2>{{ availableCount }}</h2>
           <p>Available Donors</p>
       </div>
       </div>
      </header>
    </div>
      <section>
          <!-- v-show used once -->
         <h2 v-show="aPlusDonors.length" class="section-title">
          A+ Blood Group All Donors Needed for Urgent Cases
        </h2>
          <!-- Donor List -->
         <div class="donor-grid">
          <div
            class="donor-card":class="donor.available ? 'available-card' : 'unavailable-card'"
            v-for="donor in aPlusDonors"
            :key="donor.name"
          >
            <h2>{{ donor.name }}</h2>
            <p style="color: azure;"><strong>Blood:</strong> {{ donor.blood }}</p>
            <p style="color: azure;"><strong>City:</strong> {{ donor.city.toUpperCase() }}</p>
            <div class="badge" :class="donor.available ? 'available' : 'unavailable'">
              <strong v-if="donor.available">Available</strong>
              <span v-else>Not Available</span>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import donorLogic from './donor/DonorLogic.js';

export default donorLogic;
</script>


<style scoped>

/* Global Look */
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffe5e5, #fff);
  font-family: "Segoe UI", sans-serif;
}

/* Layout */
.container {
  max-width: 1100px;
  margin: auto;
  padding: 2rem;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo {
  width: 100px;
  margin-bottom: 1rem;
  border-radius: 50%;
  border-color: #f9781b;
  border-width: 3px;
  border-style: solid;
}

.header h1 {
  color: #000000;
  font-size: 2.5rem;
}

.header p {
  font-size: 1.1rem;
  color: #820d0d;
}

/* Stats */
.stats {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

 .stat-card {
  background: rgb(2, 18, 90);
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1.5rem;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
} 

.stat-card h2{
  color: #c8c40a;
  font-size: 2.5rem;
}
.stat-card p {
  color: #f7f6f6;
  margin-top: 0.5rem;
}

/* Section */
.section-title {
  text-align: center;
  color: #510337;
  margin-bottom: 2.5rem;
  
}

/* Donor Cards */
.donor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.donor-card {
  width: 400px;
  background: rgb(35, 46, 117);
  padding: 1.5rem;
  border-radius: 36px;
  transition: transform 0.3s ease;
}

.donor-card:hover {
  transform: translateY(-5px);
}
.available-card {
  border: 2px solid #4f1aec;
}
.unavailable-card {
  border: 2px solid #b30000;
}

.donor-card h2{
  color: #f4f4f4;
  margin-bottom: 0.5rem;
}

/* Badge */
.badge {
  display: inline-block;
  margin-top: 0.8rem;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: bold;
}


.available {
  background: #beb015;
  color: #032821;
}
.available:hover {
  background: #032821;
  color: #beb015;
}

.unavailable {
  background: #a80505;
  color: #050303;
}
.unavailable:hover {
  background: #040303;
  color: #b30000;
}
</style>
