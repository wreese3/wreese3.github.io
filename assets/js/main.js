(function($) {
    'use strict';

    /*====================================
	// 	Inpage Smooth Scroll
	======================================*/
    $(document).on('click', '.ips', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });

}(jQuery))


// Check JS is Connected
console.log('OK');

// get JSON data
// create anchor link for each item
document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      
      const container = document.getElementById("media-container");
  
      data.myLinks.forEach(({ url, name, img, description}) => {
        const socialMediaLink = document.createElement("div");
        socialMediaLink.className = "col-10 col-lg-4";
        socialMediaLink.innerHTML = `
            <div class="feature-grid box box-shadow box-shadow__hover bg-light-primary row" onclick="location.href='${url}';" style="cursor: pointer;">
                <div class="mt-auto col">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-4 col-lg-12">
                            <img src="${img}" alt="media image" class="img-fluid">
                            <!-- Empty Space -->
                            <div class="md-space"></div>
                            <!--/ End Empty Space -->
                        </div>
                        <div class="col-12 col-md-8 col-lg-12 text-center text-md-left text-lg-center">
                            <h3 class="font-weight__500">
                              ${name}
                            </h3>
                            <p>
                                ${description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(socialMediaLink);
      });
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  });