describe('Silly Service', function() {
	var sillyService;

	beforeEach(module('ExampleApp'));

	beforeEach(inject(function(SillyService) {
		sillyService = SillyService;
	}));

	it('should run', function() {
		expect(sillyService.sillySum(1,2)).toBe(3);
	});
})