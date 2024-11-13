<script lang="ts">
	import { onMount } from 'svelte';
  
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
  
	const particles: { x: number; y: number; vx: number; vy: number }[] = [];
	const numParticles = 50; // Anzahl der Partikel auf 50 reduziert
	const maxDistance = 100;
	const radius = 2.5; // Durchmesser der Kreise um 50% reduziert (Radius = 2.5)
  
	// Initialisieren der Partikel
	function initParticles() {
	  for (let i = 0; i < numParticles; i++) {
		particles.push({
		  x: Math.random() * window.innerWidth,
		  y: Math.random() * window.innerHeight,
		  vx: (Math.random() - 0.5) * 2,
		  vy: (Math.random() - 0.5) * 2,
		});
	  }
	}
  
	// Update-Logik für die Partikel
	function updateParticles() {
	  for (const particle of particles) {
		particle.x += particle.vx;
		particle.y += particle.vy;
  
		// Reflexion an den Rändern
		if (particle.x < 0 || particle.x > window.innerWidth) {
		  particle.vx *= -1;
		}
		if (particle.y < 0 || particle.y > window.innerHeight) {
		  particle.vy *= -1;
		}
	  }
	}
  
	// Abstand zwischen zwei Punkten berechnen
	function distance(p1: { x: number; y: number }, p2: { x: number; y: number }) {
	  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
	}
  
	// Zeichnen der Partikel und Verbindungen
	function drawParticles() {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
	  for (const particle of particles) {
		// Partikel zeichnen
		ctx.beginPath();
		ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
		ctx.fillStyle = 'black';
		ctx.fill();
	  }
  
	  for (let i = 0; i < particles.length; i++) {
		for (let j = i + 1; j < particles.length; j++) {
		  const dist = distance(particles[i], particles[j]);
		  if (dist < maxDistance) {
			// Linie zeichnen
			ctx.beginPath();
			ctx.moveTo(particles[i].x, particles[i].y);
			ctx.lineTo(particles[j].x, particles[j].y);
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 1;
			ctx.stroke();
		  }
		}
	  }
	}
  
	// Animationsloop
	function animate() {
	  updateParticles();
	  drawParticles();
	  requestAnimationFrame(animate);
	}
  
	// Canvas initialisieren
	onMount(() => {
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	  ctx = canvas.getContext('2d')!;
  
	  initParticles();
	  animate();
  
	  // Anpassung bei Größenänderung des Fensters
	  const handleResize = () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	  };
	  window.addEventListener('resize', handleResize);
  
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	});
</script>
  
<canvas bind:this={canvas} class="fixed top-0 left-0 w-full h-screen"></canvas>
