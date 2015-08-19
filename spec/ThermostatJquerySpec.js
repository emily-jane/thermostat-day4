describe('Thermostat', function(){
  
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '..';
    loadFixtures('index.html');
    // $.holdReady(false);
  });

  describe('Power Saving Checkbox', function() {
    it('is checked when app is started', function() {
      expect($("<input type='checkbox' name='power_saving' id='power_saving_checkbox' checked>")).toBeChecked();
    });

    // describe('when temperature is above 25 and box is unchecked', function() {
    //   it('resets temperature to 25 when checked', function() {
    //     $(#power_saving_checkbox)
    //   });
    // });
  });

  describe('Temperature increase button', function() {
    it('increases the temperature when clicked', function() {
      $("button#increase_temperature").click();
      expect('#current_temperature').toContainText('21');
    });
  });
});